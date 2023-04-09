

function SkillPool() {
    const skills = [["Product Sense", "Intellegence"], ["Design", "Intellegence"], ["Technical", "Intellegence"], ["Strategy", "Analysis"], ["KPI Execution", "Analysis"], ["User Research", "Analysis"], ["Communication", "Leadership"], ["Project Management", "Leadership"], ["Charisma", "Leadership"],["Charisma", "Leadership"],["Charisma", "Leadership"],["Charisma", "Leadership"]]

    return (
      <div className="">
        <table className="centered">
            <thead>
              <tr>
                <th>Skill</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
            {skills.map((skill) => (
              <tr>
                <td>{skill[0]}</td>
                <td>{skill[1]}</td>
              </tr>
            ))}
            </tbody>
        </table>
      </div>
    )
  }

  export default SkillPool;
