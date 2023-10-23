import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
function SectionDetail() {
    const sections = useSelector((state) => state.sections);
    const { id } = useParams();
    const detailsection = sections.find((section) => section.id === Number(id));
}