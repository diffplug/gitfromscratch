const inlineStyle2Col = `
table th:first-of-type {
    width: 25%;
}
table th:nth-of-type(2) {
    width: 75%;
}
`

const inlineStyle3Col = `
table {
    height: fit-content;
}
table tr {
    height: 100%;
}
table th:first-of-type {
    width: 25%;
}
table th:nth-of-type(2) {
    width: 50%;
}
table th:nth-of-type(3) {
    width: 25%;
}
`

interface TableStyleProps {
  cols: number
}

// https://stackoverflow.com/a/58338258/6569520
export function TableStyle({ cols }: TableStyleProps) {
  let html: string
  if (cols === 2) {
    html = inlineStyle2Col
  } else if (cols === 3) {
    html = inlineStyle3Col
  } else {
    throw new Error('Unsupported number of Table columns')
  }

  return <style dangerouslySetInnerHTML={{ __html: html }} />
}
