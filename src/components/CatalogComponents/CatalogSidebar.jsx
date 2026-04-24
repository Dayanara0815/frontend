import React from 'react';

const CatalogSidebar = () => {
    return (
        <div className="bg-light p-3 border-end" style={{ minHeight: '100vh' }}>
            <h5 className="mb-4">Filtros</h5>

            {/* Filtro: Especie */}
            <div className="mb-3">
                <label className="form-label fw-bold">Especie</label>
                <select className="form-select">
                    <option value="">Todas</option>
                    <option value="perro">Perros</option>
                    <option value="gato">Gatos</option>
                    <option value="otro">Otros</option>
                </select>
            </div>

            {/* Filtro: Edad */}
            <div className="mb-3">
                <label className="form-label fw-bold">Edad</label>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="cachorro" />
                    <label className="form-check-label" htmlFor="cachorro">Cachorro</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="adulto" />
                    <label className="form-check-label" htmlFor="adulto">Adulto</label>
                </div>
            </div>

            {/* Filtro: Sexo */}
            <div className="mb-3">
                <label className="form-label fw-bold">Sexo</label>
                <div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="sexo" id="macho" />
                        <label className="form-check-label" htmlFor="macho">Macho</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="sexo" id="hembra" />
                        <label className="form-check-label" htmlFor="hembra">Hembra</label>
                    </div>
                </div>
            </div>

            {/* Botones de Acción */}
            <div className="d-grid gap-2 mt-4">
                <button className="btn btn-primary" type="button">Aplicar Filtros</button>
                <button className="btn btn-outline-secondary btn-sm" type="button">Limpiar Filtros</button>
            </div>
        </div>
    );
};

export default CatalogSidebar;