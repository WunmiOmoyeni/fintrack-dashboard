import Image from "next/image";
import person from '../images/A professional-looking individual with short dark hair and glasses smiling in a modern office setting..png'

interface User {
  id: string | number;
  name: string;
}

interface UserAvatarGroupProps {
  users: User[];
  otherUsersCount?: number;
  showNames?: boolean;
  size?: 'sm' | 'md';
  maxVisible?: number; // Control how many avatars to show before +count
}

const avatarUrls = [
  person, // Your local image first
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=100&h=100&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=100&h=100&fit=crop&crop=face'
];

export default function UserAvatarGroup({ 
  users, 
  otherUsersCount = 0, 
  showNames = true,
  size = 'md',
  maxVisible = 5 // Show up to 5 avatars by default
}: UserAvatarGroupProps) {
  const sizeClasses = size === 'sm' ? 'h-6 w-6' : 'h-8 w-8';
  const textSizeClass = size === 'sm' ? 'text-xs' : 'text-xs';
  const leadingClass = size === 'sm' ? 'leading-6' : 'leading-8';

  // Show up to maxVisible users, then show +count for the rest
  const visibleUsers = users.slice(0, maxVisible);
  const hiddenUsersCount = Math.max(0, users.length - maxVisible) + otherUsersCount;

  return (
    <div className="flex items-center space-x-2 text-sm text-gray-600">
      <div className="flex -space-x-2">
        {visibleUsers.map((user, index) => {
          const isFirstImage = index === 0;
          const imageSource = avatarUrls[index % avatarUrls.length];
          
          return isFirstImage && typeof imageSource !== 'string' ? (
            // Use Next.js Image component for local images
            <Image
              key={user.id.toString()}
              src={imageSource}
              alt={user.name}
              title={user.name}
              className={`inline-block ${sizeClasses} rounded-full ring-2 ring-white object-cover`}
              style={{ zIndex: visibleUsers.length - index }}
              width={size === 'sm' ? 24 : 32}
              height={size === 'sm' ? 24 : 32}
            />
          ) : (
            // Use regular img tag for external URLs
            <img
              key={user.id.toString()}
              className={`inline-block ${sizeClasses} rounded-full ring-2 ring-white object-cover`}
              src={typeof imageSource === 'string' ? imageSource : ''}
              alt={user.name}
              title={user.name}
              style={{ zIndex: visibleUsers.length - index }}
            />
          );
        })}
        
        {hiddenUsersCount > 0 && (
          <span 
            className={`inline-block ${sizeClasses} rounded-full bg-gray-200 ${textSizeClass} text-gray-500 text-center ${leadingClass} ring-2 ring-white`}
            style={{ zIndex: 0 }}
          >
            +{hiddenUsersCount}
          </span>
        )}
      </div>
      
      {showNames && (
        <span>
          {visibleUsers.map((u) => u.name).join(", ")}
          {hiddenUsersCount > 0 && ` + ${hiddenUsersCount} Others`}
        </span>
      )}
    </div>
  );
}

// Usage examples with more users:
// const sampleUsers = [
//   { id: 1, name: "Alice Johnson" },
//   { id: 2, name: "Bob Smith" },
//   { id: 3, name: "Carol Davis" },
//   { id: 4, name: "David Wilson" },
//   { id: 5, name: "Eva Brown" },
//   { id: 6, name: "Frank Miller" },
//   { id: 7, name: "Grace Taylor" }
// ];

// <UserAvatarGroup 
//   users={sampleUsers} 
//   maxVisible={6}  // Show 6 avatars before +count
//   size="md" 
//   showNames={true} 
// />