import { Inline } from '@/components/Inline'

export function TagsTable() {
  return (
    <table>
      <thead>
        <tr>
          <th className="w-[10%]">Kind of tag</th>
          <th className="w-[60%]">How to make one</th>
          <th className="w-[30%]">What they look like</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="align-top">Lightweight</td>
          <td className="p-0 align-top">
            <Inline alt="Lightweight tag dialog" src="share/tags/tag-dialog-lightweight.png" />
          </td>
          <td className="p-0 align-top">
            <Inline alt="Lightweight tag right-click" src="share/tags/tag-view-lightweight.png" />
          </td>
        </tr>
        <tr>
          <td className="align-top">Annotated</td>
          <td className="p-0 align-top">
            <Inline alt="Annotated tag dialog" src="share/tags/tag-dialog-annotated.png" />
          </td>
          <td className="p-0 align-top">
            <Inline alt="Annotated tag right-click" src="share/tags/tag-view-annotated.png" />
          </td>
        </tr>
      </tbody>
    </table>
  )
}
