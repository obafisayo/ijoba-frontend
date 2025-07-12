import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { projects } from '../data/projectData';

export const ProjectDetails = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    useEffect(() => {
        const foundItem = projects.find((item) => item.id === parseInt(id));
        setData(foundItem);
    }, [id]);
    console.log(data);
  return (
    <div>Project details for{data?.name}</div>
  )
}
 