#!/bin/bash

cwd=`pwd`
ExternalsDir="${cwd}/externals"
GeneratedDir="${cwd}/packages"

# Source directory names (actual submodule folder names on disk)
AnonCredsSrc=anoncreds
DIDCommSrc=didcomm

# Output package names (for generated wasm packages)
AnonCredsOut=identus-anoncreds
DIDCommOut=identus-didcomm
JWEOut=identus-jwe

AnonCredsDir="${ExternalsDir}/${AnonCredsSrc}"
DIDCommDir="${ExternalsDir}/${DIDCommSrc}"

BOLD='\033[1m'
BLUE='\033[33m'
GREEN='\033[32m'
RED='\033[31m'
END='\033[0m'


didcommNewCommit=$(git submodule | grep $DIDCommSrc | awk '{print $1}')
didcommOldCommit=$(cat "${ExternalsDir}/${DIDCommOut}.commit" 2>/dev/null)
didcommRequired=$?

anoncredsNewCommit=$(git submodule | grep $AnonCredsSrc | awk '{print $1}')
anoncredsOldCommit=$(cat "${ExternalsDir}/${AnonCredsOut}.commit" 2>/dev/null)
anoncredsRequired=$?

is_mac() {
  [[ "$OSTYPE" == "darwin"* ]]
}

buildDIDComm() {
  echo "Build DIDComm"

  local GenDIDComm="${GeneratedDir}/wasm/didcomm/generated"
  # remove previous generated
  rm -rfv "${GenDIDComm}*"
  # generate new
  cd "${DIDCommDir}/wasm"
  wasm-pack build --scope hyperledger --out-name identus-didcomm --target=web --out-dir="${GenDIDComm}"
  cd "${GenDIDComm}"
  # Fix package name (wasm-pack uses crate name from Cargo.toml)
  if is_mac; then
    sed -i '' 's/"name": "@hyperledger\/didcomm-js"/"name": "@hyperledger\/identus-didcomm-wasm"/' package.json;
  else
    sed -i 's/"name": "@hyperledger\/didcomm-js"/"name": "@hyperledger\/identus-didcomm-wasm"/' package.json;
  fi
  if is_mac; then
    sed -i '' 's/"module": "identus-didcomm.js",/"main": "identus-didcomm.js",/' package.json;
    sed -i '' '/new URL.*_bg\.wasm/d' "./identus-didcomm.js";
  else
    sed -i 's/"module": "identus-didcomm.js",/"main": "identus-didcomm.js",/' package.json;
    sed -i '/new URL.*_bg\.wasm/d' "./identus-didcomm.js";
  fi
  cd $ExternalsDir
  git submodule | grep $DIDCommSrc | awk '{print $1}' > "./${DIDCommOut}.commit"
}

buildJWT() {
  echo "Build JWT"

  local GenJWERust="${GeneratedDir}/wasm/jwe/generated"
  # remove previous generated
  rm -rfv "${GenJWERust}*"
  # generate new
  cd "${DIDCommDir}/wasm-jwe"
  wasm-pack build --scope hyperledger --out-name identus-jwe --target=web --out-dir="${GenJWERust}"
  cd "${GenJWERust}"
  # Fix package name (wasm-pack uses crate name from Cargo.toml)
  if is_mac; then
    sed -i '' 's/"name": "@hyperledger\/jwe-rust"/"name": "@hyperledger\/identus-jwe-wasm"/' package.json;
  else
    sed -i 's/"name": "@hyperledger\/jwe-rust"/"name": "@hyperledger\/identus-jwe-wasm"/' package.json;
  fi
  if is_mac; then
    sed -i '' 's/"module": "identus-jwe.js",/"main": "identus-jwe.js",/' package.json;
    sed -i '' '/new URL.*_bg\.wasm/d' identus-jwe.js;
  else
    sed -i 's/"module": "identus-jwe.js",/"main": "identus-jwe.js",/' package.json;
    sed -i '/new URL.*_bg\.wasm/d' identus-jwe.js;
  fi

  cd $ExternalsDir
  git submodule | grep $DIDCommSrc | awk '{print $1}' > "./${DIDCommOut}.commit"
}

buildAnonCreds() {
  echo "Build AnonCreds"

  GenAnonCreds="${GeneratedDir}/wasm/anoncreds/generated"
  rm -rfv "${GenAnonCreds}*"

  cd $AnonCredsDir/wasm

  RUSTFLAGS='-C target-feature=+bulk-memory' wasm-pack build --scope hyperledger --out-name identus-anoncreds --target=web --out-dir="${GenAnonCreds}"
  
  #TODO: find better way to approach this
  #This code fails on browser when wasm is first loaded, it can just be ignored
  #The code will fully work
  cd "${GenAnonCreds}"
  # Fix package name (wasm-pack uses crate name from Cargo.toml)
  if is_mac; then
    sed -i '' 's/"name": "@hyperledger\/anoncreds-wasm"/"name": "@hyperledger\/identus-anoncreds-wasm"/' package.json;
  else
    sed -i 's/"name": "@hyperledger\/anoncreds-wasm"/"name": "@hyperledger\/identus-anoncreds-wasm"/' package.json;
  fi
  if is_mac; then
    sed -i '' 's/"module": "identus-anoncreds.js",/"main": "identus-anoncreds.js",/' package.json;
    sed -i '' '/new URL.*_bg\.wasm/d' "./identus-anoncreds.js";
  else
    sed -i 's/"module": "identus-anoncreds.js",/"main": "identus-anoncreds.js",/' package.json;
    sed -i '/new URL.*_bg\.wasm/d' "./identus-anoncreds.js";
  fi

  cd $ExternalsDir
  git submodule | grep $AnonCredsSrc | awk '{print $1}' > "./${AnonCredsOut}.commit"
}

checkDIDComm() {
  # no commit found - update
  # commits mismatch - update
  # submodule folder missing - update
  if [ "$didcommRequired" -eq 1 ] || \
     [ "$didcommOldCommit" != "$didcommNewCommit" ] || \
     [ -z "$(find "$DIDCommDir" -maxdepth 1 -type f)" ]; then
    return 2
  # generated folder missing - build
  elif [ -z "$(find "${GeneratedDir}" -name "${DIDCommOut}*" -maxdepth 1 -type d 2>/dev/null)" ]; then
    return 1
  else
    return 0
  fi
}

checkAnonCreds() {
    # no commit found - update
  # commits mismatch - update
  # submodule folder missing - update
  if [ "$anoncredsRequired" -eq 1 ] || \
     [ "$anoncredsOldCommit" != "$anoncredsNewCommit" ] || \
     [ -z "$(find "$AnonCredsDir" -maxdepth 1 -type f)" ]; then
    return 2
  # generated folder missing - build
  elif [ -z "$(find "${GeneratedDir}" -name "${AnonCredsOut}*" -maxdepth 1 -type d 2>/dev/null)" ]; then
    return 1
  else
    return 0
  fi
}

checkSubmodules() {
  echo "Checking submodules"
  git submodule sync
  echo 

  # update latest commit after sync
  didcommNewCommit=$(git submodule | grep $DIDCommSrc | awk '{print $1}')
  anoncredsNewCommit=$(git submodule | grep $AnonCredsSrc | awk '{print $1}')

  checkAnonCreds
  anoncredsResult=$?
  checkDIDComm
  didcommResult=$?
  
  case "$anoncredsResult" in
    "2") echo -e "${BOLD}AnonCreds: ${RED}out of date ${END}" ;;
    "1") echo -e "${BOLD}AnonCreds: ${RED}build files missing${END}" ;;
    "0") echo -e "${BOLD}AnonCreds: ${GREEN}up to date ${END}" ;;
  esac

  case "$didcommResult" in
    "2") echo -e "${BOLD}DIDComm: ${RED}out of date ${END}" ;;
    "1") echo -e "${BOLD}DIDComm: ${RED}build files missing${END}" ;;
    "0") echo -e "${BOLD}DIDComm: ${GREEN}up to date ${END}" ;;
  esac


  echo

  if [ "$anoncredsResult" -eq 2 ] || [ "$didcommResult" -eq 2 ]; then
    echo -e "Update submodules with: ${BLUE}npm run externals:update${END}"
  elif [ "$anoncredsResult" -eq 1 ] || [ "$didcommResult" -eq 1 ]; then
    echo -e "Build submodules with: ${BLUE}npm run externals:build${END}"
  fi
}

# parse args
while [ "$#" -gt 0 ]; do
  case $1 in
    -x) execute="$2"; shift ;;
    # -t) target="$2"; shift ;;
    *) echo "Unknown parameter passed: $1"; exit 1 ;;
  esac
  shift
done


if [ "$execute" = "check" ]; then
  checkSubmodules
elif [ "$execute" = "build" ]; then
  echo "Building submodules"
  mkdir -p "$GeneratedDir"
  buildAnonCreds
  buildDIDComm
  buildJWT
elif [ "$execute" = "update" ]; then
  echo "Updating submodules"
  mkdir -p "$GeneratedDir"
  git submodule update --init --recursive --remote

  checkAnonCreds
  anoncredsResult=$?
  checkDIDComm
  didcommResult=$?

  if [ "$anoncredsResult" -ne 0 ]; then
    buildAnonCreds
  fi

  if [ "$didcommResult" -ne 0 ]; then
    buildDIDComm
    buildJWT
  fi
else
  echo "Usage: $0 [-x execution mode]"
  echo "  -x  [build | check | update]"
  echo "     build - build the current submodules"
  echo "     check - check the status"
  echo "     update - get latest and build the submodules"
  echo
  echo "Example: $0 -x check"
  exit 1
fi
