export const query = `
{
    products(first: 250) {
      edges {
        node {
          id
          title
          descriptionHtml
          featuredImage { url }
        }
      }
    }
}
`;
