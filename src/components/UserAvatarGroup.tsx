interface User {
  id: string | number; // Allow both string and number IDs
  name: string;
}

interface UserAvatarGroupProps {
  users: User[];
  otherUsersCount?: number;
  showNames?: boolean;
  size?: 'sm' | 'md'; // 'sm' for 6x6, 'md' for 8x8
}

export default function UserAvatarGroup({ 
  users, 
  otherUsersCount = 0, 
  showNames = true,
  size = 'md' 
}: UserAvatarGroupProps) {
  const sizeClasses = size === 'sm' ? 'h-6 w-6' : 'h-8 w-8';
  const textSizeClass = size === 'sm' ? 'text-xs' : 'text-xs';
  const leadingClass = size === 'sm' ? 'leading-6' : 'leading-8';

  return (
    <div className="flex items-center space-x-2 text-sm text-gray-600">
      <div className="flex -space-x-2">
        {users.map((user, index) => (
          <img
            key={user.id.toString()} // Convert to string for key
            className={`inline-block ${sizeClasses} rounded-full ring-2 ring-white`}
            src={`https://api.dicebear.com/6.x/initials/svg?seed=${user.name}`}
            alt={user.name}
            title={user.name}
            style={{ zIndex: users.length - index }}
          />
        ))}
        {otherUsersCount > 0 && (
          <span 
            className={`inline-block ${sizeClasses} rounded-full bg-gray-200 ${textSizeClass} text-gray-500 text-center ${leadingClass} ring-2 ring-white`}
            style={{ zIndex: 0 }}
          >
            +{otherUsersCount}
          </span>
        )}
      </div>
      {showNames && (
        <span>
          {users.map((u) => u.name).join(", ")}
          {otherUsersCount > 0 &&
            ` + ${otherUsersCount.toString().padStart(2, "0")} Others`}
        </span>
      )}
    </div>
  );
}