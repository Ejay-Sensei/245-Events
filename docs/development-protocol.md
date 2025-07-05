# Development Protocol & Agent Guidelines

## **MANDATORY PRE-WORK CONTEXT CHECK**

### **Rule #1: Context-First Development**
**CRITICAL**: Any agent working on this project MUST complete a full context assessment before making ANY code changes, especially in new conversations.

### **Required Context Assessment Steps**

#### **1. Project State Analysis (MANDATORY)**
- [ ] Read the latest story completion status in `/docs/stories/`
- [ ] Check the development logs and issue resolution status
- [ ] Verify current application state vs. documented state
- [ ] **File Existence Check**: Verify documented files actually exist (e.g., .env.local, config files)
- [ ] Identify any gaps between documentation and reality

#### **2. Current Error State Check (MANDATORY)**
- [ ] Run the development server and check for active errors
- [ ] Compare current errors with previously resolved issues
- [ ] Determine if issues are new, regressed, or persistent

#### **3. Historical Context Review (MANDATORY)**
- [ ] Review **Dev Agent Record** section in relevant stories
- [ ] Check **Debug Log References** for similar issues
- [ ] Verify if "resolved" issues are actually resolved

#### **4. Change Impact Assessment (MANDATORY)**
- [ ] Determine if proposed changes conflict with existing work
- [ ] Check if changes might revert previous fixes
- [ ] Assess whether changes are necessary or redundant

### **Violation Consequences**
- **If this protocol is not followed**: Stop work immediately and complete context assessment
- **If changes are made without context**: Document the oversight and assess potential damage

---

## **DEVELOPMENT ISSUE LOGGING PROTOCOL**

### **Rule #2: Comprehensive Issue Documentation**

#### **For Every Fix/Change Made:**

1. **Update the relevant story's Dev Agent Record**
   ```markdown
   **Issue N: [Brief Description] - [STATUS]**
   - **Problem**: [Detailed problem description]
   - **Root Cause**: [What caused the issue]
   - **Solution**: [What was done to fix it]
   - **Implementation**: [Specific commands/code changes]
   - **Status**: [✅ RESOLVED / ❌ FAILED / ⚠️ PARTIAL]
   - **Verification**: [How the fix was verified]
   ```

2. **Create Change Log Entry**
   ```markdown
   | Date | Agent | Issue | Change | Status |
   |------|-------|--------|--------|--------|
   | [Date] | [Agent ID] | [Issue#] | [Change Summary] | [Status] |
   ```

3. **Update Project State Documentation**
   - Update story completion status if applicable
   - Note any environment or configuration changes
   - Document any new dependencies or requirements

---

## **INCIDENT REPORT: CSS Compilation Error**

### **What Happened**
- **Date**: [Current]
- **Agent**: BMad Master
- **Issue**: Attempted to fix CSS compilation error without proper context check
- **Problem**: Story 0.1 documented this issue as "RESOLVED ✅" but error persisted
- **Root Cause**: Agent failed to assess documented vs. actual project state

### **Lessons Learned**
1. **Documentation != Reality**: Always verify documented status against actual state
2. **Context First**: Never assume problem understanding without full context review
3. **Regression Detection**: "Resolved" issues can regress and need re-verification

### **Process Improvements Implemented**
1. ✅ Created this Development Protocol document
2. ✅ Established mandatory context assessment rules
3. ✅ Created comprehensive issue logging requirements

---

## **INCIDENT REPORT: Environment Configuration Gap**

### **What Happened**
- **Date**: [Current]
- **Agent**: BMad Master
- **Issue**: Story 0.1 documented environment setup as "COMPLETE ✅" but no .env.local file existed
- **Problem**: Documentation claimed Task 5 was complete but critical files were missing
- **Root Cause**: Task completion marked without verifying actual file creation

### **Resolution Applied**
1. **Context Assessment**: Verified no .env files existed in project root
2. **Credential Integration**: User provided actual Supabase credentials
3. **File Creation**: Created .env.local with real environment variables
4. **Security Verification**: Confirmed .gitignore properly excludes .env files
5. **Connection Test**: Verified development server detected new environment file

### **Lessons Learned**
1. **File Existence != Task Completion**: Always verify actual file creation
2. **Template != Implementation**: Documentation templates don't equal working configuration
3. **Credential Reality**: Development requires actual service credentials, not placeholders

### **Process Improvements Applied**
1. ✅ Added "File Existence Check" to context assessment protocol
2. ✅ Updated Story 0.1 with missing environment configuration resolution
3. ✅ Established credential verification as part of infrastructure validation

---

## **AGENT HANDOFF CHECKLIST**

### **When Starting Work on This Project**
- [ ] Read this Development Protocol document completely
- [ ] Complete the mandatory context assessment
- [ ] Review the latest story development logs
- [ ] Verify current application state
- [ ] Document your context assessment findings

### **Before Making Any Changes**
- [ ] Confirm the issue exists and is not already resolved
- [ ] Check if similar issues were previously addressed
- [ ] Verify changes won't conflict with existing work
- [ ] Plan proper logging of the fix

### **After Making Changes**
- [ ] Update the relevant story's Dev Agent Record
- [ ] Create change log entry
- [ ] Verify the fix works as expected
- [ ] Update project state documentation

---

## **QUICK REFERENCE**

### **Emergency Context Check Commands**
```bash
# Check current development server status
npm run dev

# Check story completion status
ls docs/stories/

# Check latest development logs
# Review "Dev Agent Record" section in story files

# Verify environment status
# Check if .env files exist and are properly configured
```

### **Critical Files to Review**
- `/docs/stories/[latest].md` - Development progress and issue logs
- `/docs/development-protocol.md` - This protocol document
- `package.json` - Dependencies and scripts
- `/src/app/globals.css` - Known issue area
- `/environment-setup.md` - Environment configuration status

---

## **PROTOCOL VERSION**
- **Version**: 1.0
- **Created**: [Current Date]
- **Created By**: BMad Master
- **Reason**: Response to CSS compilation error incident
- **Next Review**: After next major development incident

---

**⚠️ REMEMBER: Context First, Changes Second, Logging Always** 