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

## **STORY DEVELOPMENT WORKFLOW**

### **Rule #3: Systematic Story Implementation**

#### **Story Development Process (Based on Story 1.1 Success)**

1. **Pre-Development Assessment**
   - [ ] Verify story status is "Approved" 
   - [ ] Review all acceptance criteria thoroughly
   - [ ] Check existing asset availability (images, logos, etc.)
   - [ ] Assess current codebase state and dependencies

2. **Task Implementation Order**
   - [ ] Follow the develop-story command sequence
   - [ ] Implement tasks sequentially, completing subtasks fully
   - [ ] Mark task checkboxes [x] only when ALL subtasks complete
   - [ ] Write and verify tests before marking task complete

3. **Quality Assurance Protocol**
   - [ ] Run comprehensive test suite (`npm test`)
   - [ ] Execute linting validation (`npm run lint`)
   - [ ] Verify development server runs without errors
   - [ ] Test all user interactions and navigation

4. **Story Completion Documentation**
   - [ ] Update all task checkboxes to [x]
   - [ ] Complete Dev Agent Record with detailed notes
   - [ ] Update File List with all created/modified files
   - [ ] Add comprehensive Completion Notes
   - [ ] Change status to "Ready for Review"

#### **Configuration Management Best Practices**

1. **PostCSS/Tailwind Configuration**
   - **Issue**: Tailwind CSS v4 requires specific plugin configuration
   - **Solution**: Use `'@tailwindcss/postcss': {}` in postcss.config.mjs
   - **Verification**: Ensure `npm run dev` compiles without CSS errors

2. **Testing Environment Setup**
   - **Dependencies**: Add comprehensive testing stack
     ```json
     "@testing-library/jest-dom": "^6.4.2",
     "@testing-library/react": "^14.2.1", 
     "@testing-library/user-event": "^14.5.2",
     "jsdom": "^24.0.0",
     "vitest": "^1.3.1"
     ```
   - **Configuration**: Create proper vitest.config.ts and test setup
   - **React Compatibility**: Use `--legacy-peer-deps` for React 19 compatibility

3. **Code Quality Standards**
   - **ESLint Compliance**: Fix all linting errors, allow only expected warnings
   - **Type Safety**: Use proper TypeScript types, avoid `any` type
   - **Accessibility**: Escape HTML entities, use proper ARIA attributes
   - **React Best Practices**: Explicit React imports when needed

#### **Dependency Management Protocol**

1. **Installation Strategy**
   - Use `npm install --legacy-peer-deps` for React 19 compatibility
   - Add testing dependencies in proper devDependencies section
   - Verify all dependencies resolve without conflicts

2. **Version Compatibility**
   - **React 19**: Requires legacy peer deps for testing libraries
   - **Next.js 15.3.5**: Compatible with current configuration
   - **Tailwind CSS v4**: Requires specific PostCSS plugin syntax

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

## **SUCCESS REPORT: Story 1.1 Landing Page Implementation**

### **What Worked Well**
- **Date**: 2025-01-13
- **Agent**: Claude Sonnet 4 (Dev Agent)
- **Story**: 1.1 Landing Page Implementation
- **Status**: ✅ COMPLETED SUCCESSFULLY
- **Result**: All 8 acceptance criteria met, 8/8 tests passing

### **Successful Implementation Process**
1. **Context Assessment**: Verified existing assets and design system
2. **Sequential Task Completion**: Followed develop-story workflow precisely
3. **Configuration Management**: Resolved PostCSS and testing setup
4. **Quality Assurance**: Comprehensive testing and linting validation
5. **Documentation**: Complete Dev Agent Record and file tracking

### **Key Technical Achievements**
- **Component Architecture**: Clean, responsive landing page component
- **Design System Integration**: Proper application of design tokens
- **Performance Optimization**: Next.js Image optimization implemented
- **Accessibility**: Full ARIA labels and semantic HTML structure
- **Testing Coverage**: 8 comprehensive unit tests covering all functionality
- **Navigation**: Working routing system with proper Link components

### **Configuration Solutions Applied**
1. **PostCSS Fix**: Updated to `'@tailwindcss/postcss': {}` syntax
2. **Testing Setup**: Full Vitest configuration with jsdom environment
3. **React Compatibility**: Added explicit React imports for JSX
4. **Dependency Management**: Used `--legacy-peer-deps` for React 19
5. **Code Quality**: Resolved ESLint issues with proper type safety

### **Lessons Learned**
1. **Systematic Approach**: Following the develop-story workflow prevents issues
2. **Configuration First**: Resolve build/test setup before implementation
3. **Quality Gates**: Don't mark tasks complete until all validations pass
4. **Documentation Value**: Comprehensive Dev Agent Records enable success
5. **Testing Early**: Write tests alongside implementation, not after

### **Best Practices Established**
1. ✅ Always verify asset availability before starting development
2. ✅ Set up testing environment completely before writing tests
3. ✅ Use proper TypeScript types and avoid `any` usage
4. ✅ Test navigation and user interactions thoroughly
5. ✅ Update story documentation comprehensively upon completion

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

## **INCIDENT REPORT: Terminal Command Execution Issues**

### **What Happened**
- **Date**: [Current]
- **Agent**: BMad Master  
- **Issue**: Terminal commands frequently getting stuck, interrupted, or failing
- **Problem**: PowerShell command parsing errors and execution timeouts
- **Root Cause**: Mixing Unix commands with PowerShell environment and using overly complex commands

### **Symptoms Identified**
1. **Command Interruption**: Commands getting cut off mid-execution
2. **Parsing Errors**: Random characters (e.g., `q`) appearing in output
3. **Command Not Found**: Unix commands (`pwd`, `wc`, `curl`) failing in PowerShell
4. **Tool Timeouts**: Long-running commands causing tool failures
5. **Shell State Corruption**: Terminal sessions becoming unresponsive

### **Resolution Applied**
1. **PowerShell-Native Commands**: Replaced Unix commands with PowerShell equivalents
2. **Simplified Command Structure**: Used single-line, focused commands
3. **Shorter Command Strings**: Avoided complex multi-line operations
4. **Proper Error Handling**: Implemented fallback strategies for command failures

### **PowerShell Command Reference**
| Unix Command | PowerShell Command | Purpose |
|--------------|-------------------|---------|
| `pwd` | `Get-Location` | Current directory |
| `ls` | `Get-ChildItem` | List files |
| `wc -l file` | `(Get-Content file).Count` | Count lines |
| `curl` | `Invoke-WebRequest` | HTTP requests |
| `grep` | `Select-String` | Pattern matching |
| `rm -rf` | `Remove-Item -Recurse -Force` | Delete files/folders |

### **Terminal Best Practices**
#### **✅ DO:**
- Use PowerShell-native commands
- Keep commands simple and single-line
- Use short, descriptive commit messages
- Test commands with simple operations first
- Use file operations when terminal fails

#### **❌ AVOID:**
- Unix commands in PowerShell environment
- Complex multi-line commands with here-strings
- Very long command strings (>200 characters)
- Chained operations with `&&` or `||`
- Background processes without proper handling

### **Lessons Learned**
1. **Environment Awareness**: Always use environment-appropriate commands
2. **Simplicity First**: Simple commands are more reliable than complex ones
3. **Fallback Strategies**: Have alternative approaches when terminal fails
4. **Progressive Testing**: Test simple commands before complex operations

### **Process Improvements Applied**
1. ✅ Added PowerShell command reference to development protocol
2. ✅ Established terminal best practices guidelines
3. ✅ Created fallback strategies for command execution failures
4. ✅ Implemented progressive command testing approach

---

## **AGENT HANDOFF CHECKLIST**

### **When Starting Work on This Project**
- [ ] Read this Development Protocol document completely
- [ ] Complete the mandatory context assessment
- [ ] Review the latest story development logs
- [ ] Verify current application state
- [ ] Check for any build/test/configuration issues
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
- [ ] Run full test suite and linting validation
- [ ] Update project state documentation

---

## **TESTING & QUALITY ASSURANCE STANDARDS**

### **Testing Requirements**
1. **Unit Tests**: All components must have comprehensive test coverage
2. **Accessibility Tests**: Verify ARIA labels, semantic HTML, keyboard navigation
3. **Responsive Design Tests**: Validate mobile and desktop layouts
4. **Navigation Tests**: Test all routing and user interactions
5. **Performance Tests**: Verify optimizations are working correctly

### **Code Quality Gates**
1. **ESLint Compliance**: All errors must be resolved, warnings documented
2. **TypeScript Safety**: Proper typing, no `any` usage without justification
3. **Accessibility Standards**: WCAG compliance for all interactive elements
4. **Performance Standards**: Proper image optimization and loading strategies

### **Configuration Management**
1. **Environment Files**: Proper .env file management and gitignore setup
2. **Build Configuration**: Working PostCSS, Tailwind, and Next.js setup
3. **Testing Configuration**: Complete Vitest and testing library setup
4. **Dependency Management**: Proper version compatibility and peer deps

---

## **QUICK REFERENCE**

### **Emergency Context Check Commands**
```powershell
# Check current development server status
npm run dev

# Check story completion status (PowerShell)
Get-ChildItem docs/stories/

# Check if .env files exist (PowerShell)
Get-ChildItem -Name .env*

# Check current directory (PowerShell)
Get-Location

# Check git status (works in PowerShell)
git status --porcelain

# Test file existence (PowerShell)
Test-Path filename.ext
```

### **Critical Files to Review**
- `/docs/stories/[latest].md` - Development progress and issue logs
- `/docs/development-protocol.md` - This protocol document
- `package.json` - Dependencies and scripts
- `/src/app/globals.css` - Known issue area
- `/environment-setup.md` - Environment configuration status

---

## **PROTOCOL VERSION**
- **Version**: 1.1
- **Created**: [Current Date]
- **Last Updated**: [Current Date]
- **Created By**: BMad Master
- **Updated By**: BMad Master
- **Reason**: Response to CSS compilation error incident
- **Update Reason**: Added terminal command execution issue resolution
- **Next Review**: After next major development incident

---

**⚠️ REMEMBER: Context First, Changes Second, Logging Always** 