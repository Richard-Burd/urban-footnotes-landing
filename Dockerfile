# Use a specific version of Node.js as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the project files into the container
COPY . .

# Expose the port that Next.js runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "run", "dev"]
