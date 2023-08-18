# Learn Microservices
Build, deploy, and scale an E-Commerce app using Microservices built with Node, React, Docker and Kubernetes


## Installation

Clone the repo `git clone https://github.com/Moemen-Gaballah/microservices-ticketing.git` and then install dependency in side all project

`npm install`

## Requirement
* docker
* kubernetes (K8S)
* Skaffold

## Configuration
add virtual host `127.0.0.1 ticketing.dev` 
in Windows OS path ` C:\Windows\System32\drivers\etc\hosts`

## Running
CMD: `skaffold dev`
maybe some exceptions like secret key stripe not found  
CMD: `kubectl create secret generic stripe-secret --from-literal STRIPE_KEY=Your_Secret`
HOST: `ticketing.dev`



