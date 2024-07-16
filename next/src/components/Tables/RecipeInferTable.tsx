import Image from 'next/image'

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
          <td>
            <Image
              alt="Docs diff"
              src="/time-travel/patch/patch-docs-diff.png"
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
          <td>
            <Image
              alt="C diff"
              src="/time-travel/patch/patch-c-diff.png"
              width={136}
              height={78}
              className="m-0"
            />
          </td>
        </tr>
      </tbody>
    </table>
  )
}
