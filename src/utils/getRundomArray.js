export function getQuestionArray(data, max) {
  return data.sort(() => Math.random() - 0.5).slice(0, max);
}

export function getAnswerArray(correct, data) {
  const result = data.sort(() => Math.random() - 0.5).slice(0, 3);
  if (!result.includes(correct)) {
    result.push(correct);
    result.sort(() => Math.random() - 0.5);
    return result
  } else {
    result.push(data[4])
    return result
  }
}