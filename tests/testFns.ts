import { vi } from "vitest";
import { Ctor, Task } from "../src/utils";

/**
 * tests utility to mock a Task
 * so that the real implementation doesn't run
 * 
 * @param task imported Task (`import { someModule } from "../path/to/task"`)
 * @param value value to be returned by the Task.run()
 */
export const mockTask = <T extends Ctor<Task<any>>>(task: T, value?: any) => {
  vi.spyOn(task.prototype, "run").mockResolvedValue(value);
};
