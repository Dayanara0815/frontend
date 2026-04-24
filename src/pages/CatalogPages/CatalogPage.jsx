import React from 'react';
import CatalogNavbar from '../../components/CatalogComponents/CatalogNavbar';
import CatalogSidebar from '../../components/CatalogComponents/CatalogSidebar';

const CatalogPage = () => {
    return (
        <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
            <CatalogNavbar />

            <div className="container-fluid">
                <div className="row">
                    <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar p-0">
                        <CatalogSidebar />
                    </nav>

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-4">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">Mascotas Disponibles</h1>
                        </div>

                    </main>
                </div>
            </div>
        </div>
    );
};

export default CatalogPage;