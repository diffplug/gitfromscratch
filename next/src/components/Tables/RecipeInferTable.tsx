import { Inline } from '@/components/Inline'

export function RecipeInferTable() {
  return (
    <table>
      <thead>
        <tr>
          <th className="w-[33%]">Before</th>
          <th className="w-[33%]">After</th>
          <th className="w-[33%]">Diff</th>
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
          <td>
            <Inline alt="Docs diff" src="time-travel/patch/patch-docs-diff.png" />
          </td>
        </tr>
        <tr>
          <td>
            <Inline alt="C before" src="time-travel/patch/patch-c-before.png" />
          </td>
          <td>
            <Inline alt="C after" src="time-travel/patch/patch-c-after.png" />
          </td>
          <td>
            <Inline alt="C diff" src="time-travel/patch/patch-c-diff.png" />
          </td>
        </tr>
      </tbody>
    </table>
  )
}
