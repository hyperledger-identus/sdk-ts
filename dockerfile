FROM node:lts-bookworm

# Install dependencies for Rust, wasm-pack, and glibc development headers
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    build-essential \
    ca-certificates \
    git \
    pkg-config \
    libssl-dev \
    libc6-dev \
    && rm -rf /var/lib/apt/lists/*

# Install Rust using rustup
RUN curl https://sh.rustup.rs -sSf | sh -s -- -y

# Set environment variables for Rust
ENV PATH="/root/.cargo/bin:${PATH}"

# Install wasm-pack using Cargo
RUN cargo install wasm-pack
ENV WASM_BINDGEN_PATH="/root/.cargo/bin/wasm-bindgen"

# Enable Corepack for Yarn
RUN corepack enable

# Set the working directory inside the container
WORKDIR /app
VOLUME /app/build

# Copy package manager and dependency files first to leverage Docker cache
COPY package.json yarn.lock .yarnrc.yml ./

# Copy workspace configuration
COPY nx.json tsconfig.base.json ./
COPY eslint.base.mjs eslint.config.mjs ./
COPY vitest.base.config.mjs vitest.config.js ./
COPY .gitmodules ./

# Copy workspace packages
COPY packages ./packages
COPY externals ./externals
COPY integration-tests ./integration-tests

# Initialize git (needed for submodules / git-based tooling)
RUN git init

# Install entrypoint script
COPY ./.docker/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Set the entrypoint
ENTRYPOINT ["/entrypoint.sh"]