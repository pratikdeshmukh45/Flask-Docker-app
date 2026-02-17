# Use Node image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy code
COPY . .

# Expose port
EXPOSE 3000

# Define ENTRYPOINT
ENTRYPOINT [ "node" ]

# Start frontend
CMD ["app.js"]
