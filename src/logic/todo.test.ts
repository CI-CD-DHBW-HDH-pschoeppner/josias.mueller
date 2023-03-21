import {
  formatTodo,
  generateColor,
  generateID,
  TodoItem,
  validateTodo,
} from "./todo";

describe("uuid generation is sufficiently random", () => {
  const uuids = new Set<string>();
  for (let i = 0; i < 100_000; i++) {
    // i sencerely hope this is sufficient ^^
    it("uuid does not exist yet", () => {
      const uuid = generateID();
      expect(uuids.has(uuid)).toBeFalsy();
      uuids.add(uuid);
    });
  }
});

describe("colour generation is within parameters", () => {
  for (let i = 0; i < 100_000; i++) {
    // same here of course
    it("colour values are within parameters", () => {
      const colour = generateColor();
      const split = colour.split(",");
      expect(split.length).toBe(3);
      expect(split[0].startsWith("rgb("));
      expect(split[2].endsWith(")"));
      split[0] = split[0].slice(4);
      split[2] = split[2].slice(0, -1);
      const ints = split.map((str) => parseInt(str));
      ints.forEach((int) => {
        expect(int).toBeLessThan(150);
        expect(int).toBeGreaterThanOrEqual(50);
      });
    });
  }
});

describe("validation of todos is functional", () => {
  it("valid todo is recognised", () => {
    const item: TodoItem = {
      id: "testid",
      value: "Perfectly normal value",
      done: false,
    };
    expect(validateTodo(item, []));
  });
  it("empty todo value is rejected", () => {
    const item: TodoItem = {
      id: "testid",
      value: "",
      done: false,
    };
    expect(validateTodo(item, [])).toBeFalsy();
  });
  it("value with length > 255 is rejected", () => {
    const item: TodoItem = {
      id: "testid",
      value: "fun".repeat(100),
      done: false,
    };
    expect(validateTodo(item, [])).toBeFalsy();
  });
  it("duplicate todo is rejected", () => {
    const item: TodoItem = {
      id: "testid",
      value: "fun",
      done: false,
    };
    expect(validateTodo(item, [item])).toBeFalsy();
  });
  it("duplicate todo is rejected (case insensitive)", () => {
    const itemlow: TodoItem = {
      id: "testid",
      value: "fun",
      done: false,
    };
    const itemhigh: TodoItem = {
      id: "testid",
      value: "FUN",
      done: false,
    };
    expect(validateTodo(itemlow, [itemhigh])).toBeFalsy();
    expect(validateTodo(itemhigh, [itemlow])).toBeFalsy();
  });
});

describe("todos are formatted correctly", () => {
  const itemhigh: TodoItem = {
    id: "testid",
    value: "FUN",
    done: false,
  };
  it("uppercase is untouched", () => {
    const res = formatTodo(itemhigh);
    expect(res.value).toBe(itemhigh.value);
  });

  const itemlow: TodoItem = {
    id: "testid",
    value: "fun",
    done: false,
  };
  it("lowercase is fixed", () => {
    const res = formatTodo(itemlow);
    expect(res.value).toBe("Fun");
  });

  const itemnormal: TodoItem = {
    id: "testid",
    value: "Fun",
    done: false,
  };
  it("normal capitalisation is untouched", () => {
    const res = formatTodo(itemnormal);
    expect(res.value).toBe(itemnormal.value);
  });
});
