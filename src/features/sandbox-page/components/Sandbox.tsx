import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { fetchPlaceholders } from "../api/sandboxApi";

export const placeholdersQueryOptions = () =>
  queryOptions({
    queryKey: ["placeholders"],
    queryFn: () => fetchPlaceholders(),
    staleTime: 1000 * 60 * 60 * 24,
  });

// 4. Component
export function Sandbox() {
  const { data: placeholders } = useSuspenseQuery(placeholdersQueryOptions());

  return (
    <div className="p-4">
      <h1 className="mb-4 text-xl font-bold">Sandbox Posts</h1>
      <ul className="space-y-3">
        {placeholders.slice(0, 5).map((post) => (
          <li key={post.id} className="border-b pb-2">
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p className="text-gray-600">{post.body}</p>
          </li>
        ))}
      </ul>

      <Button>
        <Link to={"/"}>To index</Link>
      </Button>
    </div>
  );
}
