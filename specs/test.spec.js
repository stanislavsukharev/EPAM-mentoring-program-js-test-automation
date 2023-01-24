const { sendRequest } = require("../helpers/api.helper");
const testData = require("../config/data.json");
const testDataPut = require("../config/data-put.json");
const { expect } = require("chai");

describe("API Test Suite positive", () => {

  it("should GET all resources", async () => {
    const response = await sendRequest("posts");
    expect(response.data[13].userId).to.equal(2);
    expect(response.status).to.equal(200);
  });

  it("GET post/1", async () => {
    const response = await sendRequest("posts/1");
    expect(response.data.userId).to.equal(1);
    expect(response.status).to.equal(200);
  });

  it("should GET filtered resources", async () => {
    const response = await sendRequest("posts?userId=5");
    expect(response.data[3].userId).to.equal(5);
    expect(response.status).to.equal(200);
  });

  it("POST posts", async () => {
    const response = await sendRequest("posts", testData, "post");
    expect(response.status).to.equal(201);
    expect(response.data.title).to.equal("foo");
    expect(response.data.body).to.equal("bar");
  });

  it("PUT - resource should be updated", async () => {
    const response = await sendRequest("posts/5", testDataPut, "put");
    expect(response.status).to.equal(200);
    expect(response.data.title).to.equal("foo(modified)");
    expect(response.data.body).to.equal("bar(modified)");
  });

  it("DELETE - resource should be deleted", async () => {
    const response = await sendRequest("posts/5", null, "delete");
    expect(response.status).to.equal(200);
    expect(response.data.body).to.not.equal("bar(modified)");
  });
})

describe("API Test Suite negative", () => {

  it("should not GET all resources with a typo in endpoint", async () => {
    const response = await sendRequest("pots");
    expect(response.status).to.equal(404);
    expect(response.statusText).to.equal('Not Found');
  });
  
  it("should not GET resource with non-existent id", async () => {
    const response = await sendRequest("posts/0");
    expect(response.status).to.equal(404);
    expect(response.statusText).to.equal('Not Found');
  });

  it("should not GET filtered resources with wrong parametres", async () => {
    const response = await sendRequest("postsuserId=5");
    expect(response.status).to.equal(404);
    expect(response.statusText).to.equal('Not Found');
  });

  it("POST - should receive error 404 when post with wrong endpoint", async () => {
    const response = await sendRequest("pos1s", testData, "post");
    expect(response.status).to.equal(404);
    expect(response.statusText).to.equal('Not Found');
  });

  it("PUT - resource should not be updated with wrong endpoint", async () => {
    const response = await sendRequest("pots/5", testDataPut, "put");
    expect(response.status).to.equal(404);
    expect(response.statusText).to.equal('Not Found');
  });

  it("DELETE - resource should not be deleted with wrong endpoint", async () => {
    const response = await sendRequest("post/3", null, "delete");
    expect(response.status).to.equal(404);
    expect(response.statusText).to.equal('Not Found');
  });
})
