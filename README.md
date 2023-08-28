# Crowdfunding Platform

Welcome to the Crowds, a crowdfunding Platform project! This platform allows users to create and fund campaigns using blockchain technology.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project is a decentralized crowdfunding platform built using React for the frontend, Solidity for the smart contracts, and Hardhat for compiling and deploying the contracts. It enables users to create and contribute to campaigns using cryptocurrency.

## Features

- Create and manage fundraising campaigns
- Contribute to campaigns using cryptocurrency
- View campaign details, progress, and backers
- Smart contract integration for secure and transparent transactions
- Web3 integration for interacting with the Ethereum blockchain

## Getting Started

### Prerequisites

- Node.js and npm installed
- Ethereum wallet (e.g., MetaMask) for testing on the Sepolia testnet
- Solidity development environment (e.g., Hardhat)

### Installation

1. Clone the repository:


git clone https://github.com/your-username/Crowds.git


2. Navigate to the project directory:

cd Crowds


3. Install frontend dependencies:

cd client
npm install


4. Install backend dependencies:


cd web3
npm install


## Usage

### Frontend

1. Start the frontend development server:

cd frontend
npm run dev

2. Open a web browser and go to `http://localhost:5173` to access the frontend.

### Backend

1. Compile and deploy the Solidity smart contracts:


cd backend
npx hardhat compile
npx hardhat run scripts/deploy.js --network rinkeby


2. Update the contract addresses and ABI in the frontend code to interact with the deployed contracts on the Rinkeby testnet.

## Technologies

- React
- Web3.js
- Solidity
- Hardhat

## Contributing

Contributions are welcome! If you find any issues or want to add new features, feel free to open a pull request.
