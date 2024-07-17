import Image from 'next/image'

export function BranchCasesTable() {
  return (
    <table>
      <thead>
        <tr>
          <th className="w-[25%]">Situation</th>
          <th className="w-[50%]">Description</th>
          <th className="w-[25%]">Available actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="align-top">
            <Image
              src="/share/branches/case-synced.png"
              alt="Synced"
              width={180}
              height={18}
              className="m-0"
            />
          </td>
          <td className="align-top">
            The local and remote branches are synchronized.
          </td>
          <td className="align-top">
            <Image
              src="/share/branches/case-synced-actions.png"
              alt="Synced actions"
              width={485}
              height={28}
              className="m-0"
            />
          </td>
        </tr>
        <tr>
          <td className="align-top">
            <Image
              src="/share/branches/case-local-only.png"
              alt="Local only"
              width={82}
              height={18}
              className="m-0"
            />
          </td>
          <td className="align-top">
            You have a branch that the server doesn't have.
          </td>
          <td className="align-top">
            <Image
              src="/share/branches/case-local-only-actions.png"
              alt="Local only actions"
              width={485}
              height={28}
              className="m-0"
            />
          </td>
        </tr>
        <tr>
          <td className="align-top">
            <Image
              src="/share/branches/case-remote-only.png"
              alt="Remote only"
              width={116}
              height={18}
              className="m-0"
            />
          </td>
          <td className="align-top">
            The server has a branch that you don't have.
          </td>
          <td className="align-top">
            <Image
              src="/share/branches/case-remote-only-actions.png"
              alt="Remote only actions"
              width={485}
              height={72}
              className="m-0"
            />
          </td>
        </tr>
        <tr>
          <td className="align-top">
            <Image
              src="/share/branches/case-local-new.png"
              alt="Local has new"
              width={116}
              height={56}
              className="m-0"
            />
          </td>
          <td className="align-top">
            You made some commits and haven't uploaded them yet.
          </td>
          <td className="align-top">
            <Image
              src="/share/branches/case-local-new-actions.png"
              alt="Local has new actions"
              width={485}
              height={50}
              className="m-0"
            />
          </td>
        </tr>
        <tr>
          <td className="align-top">
            <Image
              src="/share/branches/case-remote-new.png"
              alt="Remote has new"
              width={135}
              height={56}
              className="m-0"
            />
          </td>
          <td className="align-top">
            The server has some new commits which you haven't accepted yet.
          </td>
          <td className="align-top">
            <Image
              src="/share/branches/case-remote-new-actions.png"
              alt="Remote has new actions"
              width={485}
              height={72}
              className="m-0"
            />
          </td>
        </tr>
        <tr>
          <td className="align-top">
            <Image
              src="/share/branches/case-both.png"
              alt="Both have new"
              width={135}
              height={56}
              className="m-0"
            />
          </td>
          <td className="align-top">
            Both you and the server have some new commits. Congratulations!
            You're going to have to redo your work on top of the new latest
            version from the team. Git has a smorgasbord of options available to
            you, which we cover in the <a href="/time-travel">time travel</a>{' '}
            section.
          </td>
          <td className="align-top">
            <Image
              src="/share/branches/case-both-actions.png"
              alt="Both have new actions"
              width={485}
              height={94}
              className="m-0"
            />
          </td>
        </tr>
      </tbody>
    </table>
  )
}
