const url = "https://opentdb.com/api.php?amount=1&type=multiple";

/**
 * Returns a Promise containing a question and its answers from Open Trivia API.
 *
 * @returns {Promise} The Promise containing the question and answers.
 */
export async function getQuestion() {
  const requestURL = url;
  const result = await fetch(requestURL);

  if (!result.ok) {
    throw Error("Could not fetch the data for that resource.");
  }

  return result.json();
}