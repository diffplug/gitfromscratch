import { Inline } from '@/components/Inline'

export function BranchTable() {
  return (
    <table>
      <thead>
        <tr>
          <th className="w-[25%]">Kind</th>
          <th className="w-[75%]">What does it do?</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Inline alt="Branch" src="branches/sticky-notes-and-paintbrushes/local-branch.png"  />{' '}
            Local branch
          </td>
          <td>
            Marks a moveable spot in history and makes new commits. There are
            lots of ways to use a branch, and we'll show you all of them.
          </td>
        </tr>
        <tr>
          <td>
            <Inline alt="Remote Branch" src="branches/sticky-notes-and-paintbrushes/remote-branch.png" />{' '}
            Remote branch
          </td>
          <td>
            Keeps track of where a friend's branch is. You can't move it
            directly - it gets moved automatically when you download or upload
            from your friend's repository.
          </td>
        </tr>
        <tr>
          <td>
            <Inline alt="Tag" src="branches/sticky-notes-and-paintbrushes/tag.png" />{' '}
            Tag
          </td>
          <td>
            Marks a permanent spot in history. Really just a "permanent branch".
          </td>
        </tr>
      </tbody>
    </table>
  )
}
