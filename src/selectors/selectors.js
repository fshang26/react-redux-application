// If you choose to use Reselect to minimalize functions, Reselect recommends placing your selectors in a folder called selectors as well.
export function authorsFormattedForDropdown(authors) {
  return authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });
}

