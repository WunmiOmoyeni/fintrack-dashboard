export default function UserAvatarGroup() {
  return (
    <div className="flex -space-x-2 overflow-hidden mt-2">
      {["Ava", "Liam", "Noah"].map((name, i) => (
        <img
          key={i}
          className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
          src={`https://api.dicebear.com/6.x/initials/svg?seed=${name}`}
          alt={name}
        />
      ))}
      <span className="inline-block h-8 w-8 rounded-full bg-gray-200 text-xs text-gray-500 text-center leading-8 ring-2 ring-white">
        +12
      </span>
    </div>
  );
}
