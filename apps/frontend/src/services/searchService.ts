/**
 * searchService
 * Contains rules related to search behaviour.
 * Business logic layer.
 */
export const searchService = {
  isValidSearch(keyword: string) {
    return keyword.trim().length >= 2;
  },
};