interface StaffCareerListProps {
  label: string;
  career: (string | null)[];
}

export const StaffCareerList = ({
  label,
  career,
}: StaffCareerListProps): JSX.Element => {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-2">{label}</h3>

      <ul>
        {career.map((item, index) => (
          <li className="mb-1" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
