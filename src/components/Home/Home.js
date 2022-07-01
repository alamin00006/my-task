import React from 'react';
import Searching from '../Searching/Searching';
import Table from '../Table/Table';
import Modal from '../Modal/Modal';
import Pagination from '../Pagination/Pagination';

const Home = () => {
    return (
        <div>
            <Searching></Searching>
            <Table></Table>
            <Pagination></Pagination>
            <Modal></Modal>

        </div>
    );
};

export default Home;