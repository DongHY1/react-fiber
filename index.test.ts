import { expect, test } from "bun:test";
import { traverse } from ".";
import { node1 as fiberRoot } from "./fiber";


test("fiber traverse", () => {
    /**
     * we hope the output is:
     * the 'span' and 'p' and 'h1' 's child is null , so they will called twice
     */
    expect(traverse(fiberRoot)).toEqual(["div", "span", "span", "main", "p", "p", "main", "h1", "h1", "div"])
});