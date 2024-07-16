import Image from 'next/image'

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
            <Image
              src="/share/tags/tag-dialog-lightweight.png"
              alt="Lightweight tag dialog"
              width={564}
              height={230}
              className="m-0"
            />
          </td>
          <td className="p-0 align-top">
            <Image
              src="/share/tags/tag-view-lightweight.png"
              alt="Lightweight tag right-click"
              width={365}
              height={91}
              className="m-0"
            />
          </td>
        </tr>
        <tr>
          <td className="align-top">Annotated</td>
          <td className="p-0 align-top">
            <Image
              src="/share/tags/tag-dialog-annotated.png"
              alt="Annotated tag dialog"
              width={564}
              height={230}
              className="m-0"
            />
          </td>
          <td className="p-0 align-top">
            <Image
              src="/share/tags/tag-view-annotated.png"
              alt="Annotated tag right-click"
              width={365}
              height={91}
              className="m-0"
            />
          </td>
        </tr>
      </tbody>
    </table>
  )
}
