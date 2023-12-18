export default function page({ params }: { params: { id: number } }) {
  return (
    <div>
      <div>My Post: {params.id}</div>
    </div>
  );
}
