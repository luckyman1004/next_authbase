export default function Person({ error, data }) {
  // const { query } = useRouter();
  // const { data, error } = useSWR(
  //   () => query.id && `/api/people/${query.id}`,
  //   fetcher
  // )

  if (error) return <div>{error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <table className=' my-5'>
      <thead className='p-2'>
        <tr className='p-2 bg-blue-600'>
          <th>Name</th>
          <th>Height</th>
          <th>Mass</th>
          <th>Hair color</th>
          <th>Skin color</th>
          <th>Eye color</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody className='p-2 my-2 '>
        <tr>
          <td>{data.name}</td>
          <td>{data.height}</td>
          <td>{data.mass}</td>
          <td>{data.hair_color}</td>
          <td>{data.skin_color}</td>
          <td>{data.eye_color}</td>
          <td>{data.gender}</td>
        </tr>
      </tbody>
    </table>
  );
}
