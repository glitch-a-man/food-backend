
# Database & Schema Architecture for Reels-Based Food Ordering App

## Project Context

This application is a reels-driven food discovery and ordering platform built with:

- Next.js (App Router)
- NextAuth (Google OAuth already implemented)
- MongoDB (connection string in `.env`)
- Prisma ORM (to be configured)

The core concept of the app is:

> Reel → Dish → One Tap Order

The database schema must strictly follow this flow.

---

## Core Entities

The entire database revolves around only **five collections**:

1. User
2. Restaurant
3. Dish
4. Reel
5. Order

No extra or generic tables should be created.

---

## Relationships Overview

```
User (Google login)
   ├── can own → Restaurant
   └── can place → Orders

Restaurant
   └── has many → Dishes

Dish
   └── has one → Reel

Reel
   └── belongs to → Dish

Order
   ├── belongs to → User
   └── belongs to → Dish
```

---

## User Model

This user is created when a person logs in with Google for the first time.

Fields:

- id
- name
- email (unique)
- image
- role: USER | RESTAURANT
- createdAt

Purpose:
Store application user linked to NextAuth session.

---

## Restaurant Model

Fields:

- id
- name
- description
- address
- cuisine (array of strings)
- rating
- image
- ownerId (references User)
- createdAt

Purpose:
Public restaurant profile and ownership mapping.

---

## Dish Model

Fields:

- id
- name
- description
- price
- category
- rating
- eta
- restaurantId (references Restaurant)
- createdAt

Purpose:
Orderable food item.

---

## Reel Model (Most Important)

Fields:

- id
- videoUrl
- dishId (references Dish)
- createdAt

Purpose:
This powers the reels feed. A reel is only a video representation of a dish.

---

## Order Model

Fields:

- id
- userId (references User)
- dishId (references Dish)
- status: PLACED | PREPARING | DELIVERED
- createdAt

Purpose:
Stores user orders.

---

## Critical Rules

1. Do NOT delete or reset existing data.
2. Use the MongoDB connection string from `.env`.
3. Prisma must be configured for MongoDB.
4. Follow exact model names and relationships.
5. Do not add extra models.
6. Use ObjectId relations as per Prisma MongoDB standards.

---

## Expected Outcome

After implementation:

- Prisma is connected to MongoDB
- All 5 models exist
- Data is preserved
- Ready to build APIs on top

---

## Prisma Responsibility

Prisma should:

- Define the schema
- Handle relations
- Connect to MongoDB
- Allow querying for APIs

---

## Future API Flow (for reference)

- `/api/user/me`
- `/api/reels`
- `/api/dishes/:id`
- `/api/orders`
- `/api/restaurants/:id`

---

# Prompt for Antigravity

Restructure and prepare the backend database layer of this project based strictly on this document.

Tasks for Antigravity:

1. Install and configure Prisma for MongoDB.
2. Use the MongoDB connection string already present in the `.env` file.
3. Create the Prisma schema exactly matching the models, fields, and relationships described here.
4. Ensure ObjectId references are properly used as per Prisma MongoDB standards.
5. Do NOT delete, reset, or alter any existing data in the database.
6. Initialize Prisma client and set up the connection utility (`lib/prisma.ts`).
7. Generate Prisma client.
8. Prepare the project so APIs can directly start using Prisma.

Do not create any APIs yet. Only focus on database schema and Prisma setup.
