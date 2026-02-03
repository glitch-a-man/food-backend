
# Reel Backend Extension for Reels-Based Food Discovery

## Context

The backend for this project is already implemented using:

- Node.js
- Express
- MongoDB
- Mongoose
- REST APIs
- Seeder utility with restaurants and menu items

This architecture must NOT be replaced or refactored.

The goal of this document is to EXTEND the current backend to support the reels-driven discovery flow of the application.

Core app concept:

Reel → Dish (MenuItem) → Order

---

## Existing Model Mapping

| Existing Model | App Concept |
|----------------|-------------|
| User           | User        |
| Restaurant     | Restaurant  |
| MenuItem       | Dish        |
| Order          | Order       |

No changes should be made to these models.

---

## New Requirement: Reel Support

A new model must be introduced to support food reels.

### Reel Model

Fields:

- videoUrl: String (required)
- menuItemId: ObjectId (ref: MenuItem, required)
- createdAt: Date (default now)

Purpose:
Each reel is a short food video representing a specific dish (menu item).

---

## API Requirements

The following APIs must be added without modifying existing ones.

### GET /api/reels

Purpose:
Return a list of reels for the feed page.

The response must include populated data:

Reel → MenuItem → Restaurant

This API powers the frontend `/feed` page.

---

### GET /api/menu-item/:id

If already present, reuse it.

Purpose:
Return details of a single dish when user swipes right on a reel.

---

### Enhance Existing API

#### GET /api/restaurants/:id

Enhance this API to additionally return:

- All menu items of the restaurant
- All reels associated with those menu items

This powers the Restaurant Profile page sections:
- Menu
- Reels/Feed

---

## Seeder Update

Extend the existing seeding utility to:

- Create reel entries for some menu items
- Use `videoUrl` present in the JSON dataset

Do NOT modify existing seed logic. Only extend.

---

## Implementation Rules

- Do NOT refactor existing models
- Do NOT replace Express or Mongoose
- Use proper Mongoose population
- Maintain RESTful API design
- Keep code modular and clean

---

## Expected Outcome

After implementation, backend should fully support:

Feed → Reel → Dish → Order

without breaking existing functionality.
