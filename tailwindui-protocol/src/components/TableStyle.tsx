const inlineStyle = `
table th:first-of-type {
    width: 25%;
}
table th:nth-of-type(2) {
    width: 75%;
}
`

// https://stackoverflow.com/a/58338258/6569520
export function TableStyle() {
  return (
  <style dangerouslySetInnerHTML={{ __html: inlineStyle}}/>
  )
}