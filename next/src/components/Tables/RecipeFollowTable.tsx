import { Inline } from '@/components/Inline'

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
            <Inline alt="Docs before" src="time-travel/patch/patch-docs-before.png" />
          </td>
          <td>
            <Inline alt="Docs after" src="time-travel/patch/patch-docs-after.png" />
          </td>
        </tr>
        <tr>
          <td>
            <Inline alt="C before" src="time-travel/patch/patch-c-before.png" />
          </td>
          <td>
            <Inline alt="C after" src="time-travel/patch/patch-c-after.png" />
          </td>
        </tr>
        <tr>
          <td>
            <Inline alt="Conflict before" src="time-travel/patch/patch-conflict-before.png" />
          </td>
          <td className="align-top">Unclear</td>
        </tr>
      </tbody>
    </table>
  )
}
