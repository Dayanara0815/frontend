import React from 'react';
import PetCard from './CatalogPetCard';

import useLocalStorage from '../../hooks/useLocalStorage';
import { mockPets } from '../../data/mockPets';

const CatalogGrid = () => {
    const { data: petsData } = useLocalStorage('catalogPets_v2', mockPets);

    return (
        <div>
            <div className="row g-4">
                {petsData.map((pet) => (
                    <div key={pet.id} className="col-12 col-md-6 col-xl-4">
                        <PetCard {...pet} />
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="d-flex justify-content-center align-items-center gap-2 mt-5 pt-4">
                <button className="btn btn-light rounded-circle d-flex align-items-center justify-content-center border-0 bg-transparent text-secondary hover-bg-surface-container-high" style={{ width: '2.5rem', height: '2.5rem' }}>
                    <span className="material-symbols-outlined">chevron_left</span>
                </button>

                <button className="btn bg-primary text-on-primary rounded-circle fw-bold" style={{ width: '2.5rem', height: '2.5rem' }}>1</button>
                <button className="btn btn-light rounded-circle fw-medium border-0 bg-transparent text-secondary hover-bg-surface-container-high" style={{ width: '2.5rem', height: '2.5rem' }}>2</button>
                <button className="btn btn-light rounded-circle fw-medium border-0 bg-transparent text-secondary hover-bg-surface-container-high" style={{ width: '2.5rem', height: '2.5rem' }}>3</button>

                <span className="px-2 text-secondary">...</span>

                <button className="btn btn-light rounded-circle fw-medium border-0 bg-transparent text-secondary hover-bg-surface-container-high" style={{ width: '2.5rem', height: '2.5rem' }}>12</button>

                <button className="btn btn-light rounded-circle d-flex align-items-center justify-content-center border-0 bg-transparent text-secondary hover-bg-surface-container-high" style={{ width: '2.5rem', height: '2.5rem' }}>
                    <span className="material-symbols-outlined">chevron_right</span>
                </button>
            </div>
        </div>
    );
};

export default CatalogGrid;