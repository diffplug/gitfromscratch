import Image from 'next/image'

export function RecipeFollowTable() {
  return (
    <table>
      <thead>
        <tr>
          <th className="w-[50%]">Before</th>
          <th className="w-[50%]">
            After <code>Add 'whale.jpg'</code>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Image
              alt="Docs before"
              src="/time-travel/patch/patch-docs-before.png"
              width={136}
              height={78}
              className="m-0"
            />
          </td>
          <td>
            <Image
              alt="Docs after"
              src="/time-travel/patch/patch-docs-after.png"
              width={136}
              height={78}
              className="m-0"
            />
          </td>
        </tr>
        <tr>
          <td>
            <Image
              alt="C before"
              src="/time-travel/patch/patch-c-before.png"
              width={136}
              height={78}
              className="m-0"
            />
          </td>
          <td>
            <Image
              alt="C after"
              src="/time-travel/patch/patch-c-after.png"
              width={136}
              height={78}
              className="m-0"
            />
          </td>
        </tr>
        <tr>
          <td>
            <Image
              alt="Conflict before"
              src="/time-travel/patch/patch-conflict-before.png"
              width={136}
              height={78}
              className="m-0"
            />
          </td>
          <td className="align-top">Unclear</td>
        </tr>
      </tbody>
    </table>
  )
}
