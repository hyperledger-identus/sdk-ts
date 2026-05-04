import {
  Answerable,
  QuestionAdapter,
  TakeNotes,
  Question,
  ChainableSetter,
  DescriptionFormattingOptions,
  AnswersQuestions,
  UsesAbilities,
  Interaction,
  notes as SerenityNotes
} from "@serenity-js/core"
import type { JSONObject } from "tiny-types"

export function notes<N extends Record<any, any>>() {
  // prevents log polluting with lots of data. ignored if in CI
  const shouldHideLogs = !process.env.CI

  return {
    has<Subject extends keyof N>(subject: Subject): QuestionAdapter<boolean> {
      const question = SerenityNotes().has(subject)
      return question
    },
    get<Subject extends keyof N>(subject: Subject): QuestionAdapter<N[Subject]> {
      const question = SerenityNotes().get(subject)
      if (shouldHideLogs) {
        return question.describedAs("the cache")
      }
      return question
    },
    set<Subject extends keyof N>(subject: Subject, value: Answerable<N[Subject]>): ChainableSetter<N> & Interaction {
      return new ChainableNoteSetter<N>({ [subject]: value } as NotesToSet<N>, shouldHideLogs)
    },
    delete<Subject extends keyof N>(subject: Subject): QuestionAdapter<boolean> {
      const question = SerenityNotes().delete(subject)
      return question
    },
    clear(): Interaction {
      const interaction = SerenityNotes().clear()
      return interaction
    },
    size(): QuestionAdapter<number> {
      const question = SerenityNotes().size()
      return question
    },
    toJSON(): QuestionAdapter<JSONObject> {
      const question = SerenityNotes().toJSON()
      return question
    },
    toString(): string {
      return "notes"
    }
  }
}

class ChainableNoteSetter<Notes extends Record<any, any>> extends Interaction implements ChainableSetter<Notes> {
  constructor(
    private readonly notes: NotesToSet<Notes>,
    private readonly shouldHideLogs: boolean
  ) {
    super(new DescriptionOfNotes(notes, shouldHideLogs))
  }

  set<K extends keyof Notes>(subject: K, value: Answerable<Notes[K]>): ChainableSetter<Notes> & Interaction {
    return new ChainableNoteSetter({ ...this.notes, [subject]: value } as NotesToSet<Notes>, this.shouldHideLogs)
  }

  async performAs(actor: AnswersQuestions & UsesAbilities): Promise<void> {
    const notepad = TakeNotes.as(actor).notepad

    for (const [subject, value] of Object.entries(this.notes)) {
      const answer = await actor.answer(value)
      notepad.set(subject, answer)
    }
  }
}

class DescriptionOfNotes<Notes extends Record<any, any>> extends Question<Promise<string>> {
  constructor(
    private readonly notes: NotesToSet<Notes>,
    private readonly shouldHideLogs: boolean,
    private readonly options?: DescriptionFormattingOptions
  ) {
    super(`#actor takes notes: ${Object.keys(notes).join(", ")}`)
  }

  async answeredBy(actor: AnswersQuestions & UsesAbilities & { name: string }): Promise<string> {
    const noteNames = Object.keys(this.notes)
    const maxWidth = noteNames.reduce((max, name) => Math.max(max, name.length), 0)

    if (this.shouldHideLogs) {
      return `#actor takes notes of "${noteNames}"`
    }

    const list = await asyncMap(noteNames, async noteName => {
      const label = `${noteName}:`.padEnd(maxWidth + 1)
      const noteDescription = await actor.answer(Question.formattedValue(this.options).of(this.notes[noteName]))

      return `- ${label} ${noteDescription}`
    })

    return ["#actor takes notes:", ...list].join("\n")
  }

  async describedBy(actor: AnswersQuestions & UsesAbilities & { name: string }): Promise<string> {
    return this.answeredBy(actor)
  }
}

type NotesToSet<Notes extends Record<any, any>> = {
  [Subject in keyof Notes]?: Answerable<Notes[Subject]>
}

async function asyncMap<Item_Type, Result_Type>(
  items: Item_Type[],
  mappingFunction: (item: Item_Type) => Promise<Result_Type> | Result_Type
): Promise<Result_Type[]> {
  const results: Result_Type[] = []
  for (const item of items) {
    const result = await mappingFunction(item)
    results.push(result)
  }
  return results
}
