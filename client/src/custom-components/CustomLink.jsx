import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <>
      <Link
        className={
          match
            ? 'flex items-center px-6 py-2 mt-4 text-gray-100 bg-gray-100 bg-opacity-25'
            : 'flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-100 hover:bg-opacity-25 hover:text-gray-100'
        }
        to={to}
        {...props}
      >
        {children}
      </Link>
    </>
  );
};

export default CustomLink;
