const performQuery = require("./src/api-client");

test("Returns movie results for search query mask", async () => {
    const result = await performQuery("mask", 1);
    expect(result.Response).toBe("True");
    expect(parseInt(result.totalResults)).toBeGreaterThan(0);
    console.log(result.totalResults);
});

test("Returns no movie results for invalid search query", async () => {
    const result = await performQuery("bhhhh", 1);
    expect(result.Response).toBe("False");
});