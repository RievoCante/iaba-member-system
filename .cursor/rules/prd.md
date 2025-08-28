# Product Requirements Document

## Intania Alumni Basketball Association (IABA) Member Management System

### 1. Project Overview

**Product Name:** IABA Member Management System  
**Version:** 1.0  
**Date:** August 2025  
**Project Type:** Web Application with Line OA Integration

#### 1.1 Product Vision

A comprehensive member management system for the Intania Alumni Basketball Association that enables seamless member registration, information management, and community engagement through Line OA and web platforms.

#### 1.2 Key Objectives

- Streamline member registration and verification process
- Provide easy access to member directory for verified members
- Enable admin-controlled content management for news and privileges
- Ensure mobile-first experience through Line OA integration

### 2. Technology Stack

- **Frontend Framework:** NextJS with TypeScript
- **Styling:** TailwindCSS + Shadcn UI components
- **Backend & Database:** Supabase
- **Deployment:** Vercel
- **Line Integration:** Line LIFF (Line Frontend Framework)
- **Authentication:** Supabase Auth + OTP email verification

### 3. User Roles & Permissions

#### 3.1 User Roles

- **สมาชิก (Member)** - Standard verified member
- **กรรมการ (Committee Member)** - Committee member with additional privileges
- **รองประธาน (Vice President)** - Vice president role
- **ประธาน (President)** - President with full administrative access

#### 3.2 Permission Matrix

| Feature                | Member | Committee | Vice President | President |
| ---------------------- | ------ | --------- | -------------- | --------- |
| View Member Directory  | ✓      | ✓         | ✓              | ✓         |
| Update Own Profile     | ✓      | ✓         | ✓              | ✓         |
| View News Feed         | ✓      | ✓         | ✓              | ✓         |
| View Privileges        | ✓      | ✓         | ✓              | ✓         |
| Admin Panel Access     | ✗      | ✓         | ✓              | ✓         |
| Approve Members        | ✗      | ✓         | ✓              | ✓         |
| Manage News Posts      | ✗      | ✓         | ✓              | ✓         |
| Manage Privilege Posts | ✗      | ✓         | ✓              | ✓         |
| User Management        | ✗      | ✗         | ✓              | ✓         |

### 4. Core Features

#### 4.1 Member Registration System

**Priority: High**

**4.1.1 Registration Flow**

1. User accesses registration through Line Rich Menu
2. User fills out registration form
3. Email OTP verification sent
4. User verifies email
5. Registration status: "Pending Approval"
6. Admin reviews and approves registration
7. Member status becomes "Verified"

**4.1.2 Registration Form Fields**

- **ชื่อจริง (ภาษาไทย)** - Thai First Name (Required)
- **ชื่อจริง (ภาษาอังกฤษ)** - English First Name (Required)
- **นามสกุล (ภาษาไทย)** - Thai Last Name (Required)
- **นามสกุล (ภาษาอังกฤษ)** - English Last Name (Required)
- **คำนำหน้า** - Title/Prefix (Required)
- **ชื่อเล่น** - Nickname (Required)
- **เลขรุ่น** - Class Number (Required)
- **เพศ** - Gender (Required)
- **ระดับปริญญาที่เข้าศึกษาครั้งแรก** - Initial Degree Level (Required)
- **ภาควิชา GROUP** - Department Group (Required)
- **เบอร์โทร** - Phone Number (Required)
- **Line ID** - Line ID (Optional)
- **อนุญาติให้เปิดเผยข้อมูล** - Allow Data Disclosure (Yes/No) (Required)
- **ที่อยู่** - Address (Optional - to be confirmed)
- **ข้อมูลการทำงาน** - Work Information (Optional - to be confirmed)

#### 4.2 Member Directory

**Priority: High**

**4.2.1 View All Members**

- Display list of all verified members
- Accessible through Line Rich Menu button
- Mobile-optimized card layout
- Respect privacy settings (show only if member allows data disclosure)

**4.2.2 Search & Filter Capabilities**

- Search by name (Thai/English)
- Filter by:
  - เลขรุ่น (Class Number)
  - ภาควิชา GROUP (Department Group)
  - เพศ (Gender)
  - ระดับปริญญา (Degree Level)

#### 4.3 News Feed System

**Priority: Medium**

**4.3.1 News Management**

- Admin-only content creation through web admin panel
- Blog-style posts with rich text editor
- Support for images and attachments
- Publication date and author tracking
- Draft and published status

**4.3.2 News Display**

- Chronological feed in Line OA and web interface
- Mobile-optimized reading experience
- Share functionality

#### 4.4 Privileges System

**Priority: Medium**

**4.4.1 Privilege Management**

- Admin-controlled privilege post creation
- Blog-style format similar to news feed
- Member request system through Line OA chat
- Admin approval workflow for member-requested privileges

**4.4.2 Privilege Display**

- Accessible through Line Rich Menu
- List format with detailed descriptions
- Mobile-optimized layout

### 5. User Experience

#### 5.1 Line OA Integration

**Rich Menu Structure:**

- **สมัครสมาชิก (Member Registration)** - Primary CTA
- **ดูสมาชิกทั้งหมด (View All Members)** - Secondary CTA
- **ข่าวสาร (News)** - Tertiary option
- **สิทธิพิเศษ (Privileges)** - Tertiary option

#### 5.2 Web Admin Panel

**Admin Dashboard Sections:**

- Member Management (pending approvals, member list)
- Content Management (news posts, privilege posts)
- User Role Management
- Analytics and Reports

#### 5.3 Mobile-First Design

- Responsive design optimized for mobile devices
- Touch-friendly interface elements
- Fast loading times
- Offline capability for basic member directory browsing

### 6. Technical Requirements

#### 6.1 Database Schema

**Users Table:**

- id (UUID, Primary Key)
- email (String, Unique)
- role (Enum: สมาชิก, กรรมการ, รองประธาน, ประธาน)
- status (Enum: pending, verified, suspended)
- created_at, updated_at

**Member_Profiles Table:**

- id (UUID, Primary Key)
- user_id (UUID, Foreign Key)
- thai_first_name (String)
- english_first_name (String)
- thai_last_name (String)
- english_last_name (String)
- title_prefix (String)
- nickname (String)
- class_number (String)
- gender (Enum)
- initial_degree_level (String)
- department_group (String)
- phone_number (String)
- line_id (String, Optional)
- allow_data_disclosure (Boolean)
- address (Text, Optional)
- work_information (Text, Optional)
- created_at, updated_at

**News_Posts Table:**

- id (UUID, Primary Key)
- author_id (UUID, Foreign Key)
- title (String)
- content (Text)
- featured_image (String, Optional)
- status (Enum: draft, published)
- published_at
- created_at, updated_at

**Privilege_Posts Table:**

- Similar structure to News_Posts

#### 6.2 Authentication & Security

- Email-based OTP verification
- Role-based access control (RBAC)
- Data encryption at rest
- HTTPS enforcement
- Input validation and sanitization

#### 6.3 Performance Requirements

- Page load time < 3 seconds on mobile 3G
- Database query optimization
- Image optimization and CDN usage
- Caching strategy for member directory

### 7. Integration Requirements

#### 7.1 Line LIFF Integration

- Seamless authentication between Line and web app
- User profile synchronization
- Rich menu deep linking
- Line notification integration (handled by Line OA)

#### 7.2 Email Service

- OTP verification emails
- Welcome emails for approved members
- System notifications for admins

### 8. Data Management

#### 8.1 Data Retention Policy

- All member data retained permanently
- Audit trail for admin actions
- Regular data backups (handled by Supabase)

#### 8.2 Privacy & Compliance

- Respect member privacy preferences
- Secure data handling practices
- GDPR-compliant data processing (where applicable)

### 9. Success Metrics

#### 9.1 Key Performance Indicators (KPIs)

- Member registration completion rate
- Admin approval processing time
- User engagement with news and privileges content
- Mobile usage percentage
- System uptime and performance

#### 9.2 User Adoption Metrics

- Daily/Weekly/Monthly active users
- Feature usage statistics
- Member directory search frequency
- Content engagement rates

### 10. Future Considerations

#### 10.1 Phase 2 Features (Future Scope)

- Event management system
- Payment integration for membership fees
- Member photo gallery
- Basketball statistics tracking
- Alumni networking features

#### 10.2 Scalability Considerations

- Database optimization for growing member base
- CDN implementation for global access
- API rate limiting
- Multi-language support expansion

### 11. Risk Assessment

#### 11.1 Technical Risks

- Line LIFF API changes
- Supabase service limitations
- Mobile compatibility issues
- Data migration challenges

#### 11.2 Mitigation Strategies

- Regular testing of Line integrations
- Backup deployment options
- Comprehensive mobile testing
- Incremental development approach

---

**Document Version:** 1.0  
**Last Updated:** August 18, 2025  
**Next Review:** September 2025

### Current Project File Structure

.git'  
.
├── .cursor
│ └── rules
│ ├── commands.md
│ └── prd.md
├── .env.local
├── .gitignore
├── .next
│ ├── app-build-manifest.json
│ ├── build
│ │ └── chunks
│ ├── build-manifest.json
│ ├── cache
│ │ ├── .rscinfo
│ │ └── next-devtools-config.json
│ ├── fallback-build-manifest.json
│ ├── package.json
│ ├── postcss.js
│ ├── postcss.js.map
│ ├── prerender-manifest.json
│ ├── routes-manifest.json
│ ├── server
│ │ ├── app
│ │ ├── app-paths-manifest.json
│ │ ├── chunks
│ │ ├── edge
│ │ ├── interception-route-rewrite-manifest.js
│ │ ├── middleware
│ │ ├── middleware-build-manifest.js
│ │ ├── middleware-manifest.json
│ │ ├── next-font-manifest.js
│ │ ├── next-font-manifest.json
│ │ ├── pages-manifest.json
│ │ ├── server-reference-manifest.js
│ │ └── server-reference-manifest.json
│ ├── static
│ │ ├── chunks
│ │ ├── development
│ │ └── media
│ ├── trace
│ └── types
│ ├── routes.d.ts
│ └── validator.ts
├── app
│ ├── auth
│ │ ├── confirm
│ │ ├── error
│ │ ├── forgot-password
│ │ ├── login
│ │ ├── sign-up
│ │ ├── sign-up-success
│ │ └── update-password
│ ├── favicon.ico
│ ├── globals.css
│ ├── layout.tsx
│ ├── opengraph-image.png
│ ├── page.tsx
│ ├── protected
│ │ ├── layout.tsx
│ │ └── page.tsx
│ └── twitter-image.png
├── components
│ ├── auth-button.tsx
│ ├── deploy-button.tsx
│ ├── env-var-warning.tsx
│ ├── forgot-password-form.tsx
│ ├── hero.tsx
│ ├── login-form.tsx
│ ├── logout-button.tsx
│ ├── next-logo.tsx
│ ├── sign-up-form.tsx
│ ├── supabase-logo.tsx
│ ├── theme-switcher.tsx
│ ├── tutorial
│ │ ├── code-block.tsx
│ │ ├── connect-supabase-steps.tsx
│ │ ├── fetch-data-steps.tsx
│ │ ├── sign-up-user-steps.tsx
│ │ └── tutorial-step.tsx
│ ├── ui
│ │ ├── badge.tsx
│ │ ├── button.tsx
│ │ ├── card.tsx
│ │ ├── checkbox.tsx
│ │ ├── dropdown-menu.tsx
│ │ ├── input.tsx
│ │ └── label.tsx
│ └── update-password-form.tsx
├── components.json
├── eslint.config.mjs
├── lib
│ ├── supabase
│ │ ├── client.ts
│ │ ├── middleware.ts
│ │ └── server.ts
│ └── utils.ts
├── LICENSE
├── middleware.ts
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public
│ └── logo.png
├── README.md
├── tailwind.config.ts
└── tsconfig.json
