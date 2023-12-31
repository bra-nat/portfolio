
const BadgeDate = ({date, className}:{date: string, className: string}) => {
  return (
    <div className={`${className}`}>
        {date}
    </div>
  )
}

export default BadgeDate;