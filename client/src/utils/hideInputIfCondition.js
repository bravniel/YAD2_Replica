export const hideInputIfCondition = (dependency, ...conditions) => {
  for (let i = 0; i < conditions.length; i++) {
    if (dependency === conditions[i]) return false;
  }

  return true;
};
