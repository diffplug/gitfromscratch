import { Inline } from '@/components/Inline'

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
            <Inline alt="Synced" src="share/branches/case-synced.png" />
          </td>
          <td className="align-top">
            The local and remote branches are synchronized.
          </td>
          <td className="align-top">
            <Inline alt="Synced actions" src="share/branches/case-synced-actions.png" />
          </td>
        </tr>
        <tr>
          <td className="align-top">
            <Inline alt="Local only" src="share/branches/case-local-only.png" />
          </td>
          <td className="align-top">
            You have a branch that the server doesn't have.
          </td>
          <td className="align-top">
            <Inline alt="Local only actions" src="share/branches/case-local-only-actions.png" />
          </td>
        </tr>
        <tr>
          <td className="align-top">
            <Inline alt="Remote only" src="share/branches/case-remote-only.png" />
          </td>
          <td className="align-top">
            The server has a branch that you don't have.
          </td>
          <td className="align-top">
            <Inline alt="Remote only actions" src="share/branches/case-remote-only-actions.png" />
          </td>
        </tr>
        <tr>
          <td className="align-top">
            <Inline alt="Local has new" src="share/branches/case-local-new.png" />
          </td>
          <td className="align-top">
            You made some commits and haven't uploaded them yet.
          </td>
          <td className="align-top">
            <Inline alt="Local has new actions" src="share/branches/case-local-new-actions.png" />
          </td>
        </tr>
        <tr>
          <td className="align-top">
            <Inline alt="Remote has new" src="share/branches/case-remote-new.png" />
          </td>
          <td className="align-top">
            The server has some new commits which you haven't accepted yet.
          </td>
          <td className="align-top">
            <Inline alt="Remote has new actions" src="share/branches/case-remote-new-actions.png" />
          </td>
        </tr>
        <tr>
          <td className="align-top">
            <Inline alt="Both have new" src="share/branches/case-both.png" />
          </td>
          <td className="align-top">
            Both you and the server have some new commits. Congratulations!
            You're going to have to redo your work on top of the new latest
            version from the team. Git has a smorgasbord of options available to
            you, which we cover in the <a href="/time-travel">time travel</a>{' '}
            section.
          </td>
          <td className="align-top">
            <Inline alt="Both have new actions" src="share/branches/case-both-actions.png" />
          </td>
        </tr>
      </tbody>
    </table>
  )
}
