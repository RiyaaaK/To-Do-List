## 1. INITIAL SETUP
**Objective**: Verify that the application initializes correctly.
**Steps**:
1. Open the application.
2. Ensure that the application loads without any errors.
3. Confirm that the initial state is empty or displays any pre-loaded tasks correctly if implemented.
**Expected Result**: The application should load and display an empty list or pre-loaded tasks.

## 2.ADDING A NEW TODO
**Objective**: Add a new task to the list.
**Steps**:
1. Add a task in the input area.
2. Click on "Add Task" button.
3. Check if the added task appears in the list.
**Expected Result**: The new task should be added to the list and the user must be able to see the updated list.

## 3.MARKING A TASK AS COMPLETE / INCOMPLETE
**Objective**: Marking the tasks as complete/incomplete.
**Steps**:
1. Click on a task to mark it as complete.
2. Check if the task is striked through (i.e. it is marked as complete).
3. Click on a striked through task to mark it as incomplete.
4. Check if the striked through task turns back to its previous state.
**Expected Results**: The user should be able to mark a task as complete or incomplete.

## 4.EDITING A TASK
**Objective**:Allow the task to be edited.
**Steps**:
1. Click the "Delete" button next to a task.
2. Confirm the deletion if prompted.
3. Verify that the task is removed from the list.
**Expected Result**: The task should be removed from the list.

## 5. DELETING A TASK
**Objective**: Ensure that tasks can be deleted.
**Steps**:
1. Click the "Delete" button next to a task.
2. Confirm the deletion if prompted.
3. Verify that the task is removed from the list.
**Expected Result**: The task should be removed from the list.

## 6. SORTING TASKS
**Objective**: Test the sorting functionality.
**Steps**:
1. Add multiple tasks with different names.
2. Click the "Sort A-Z" button.
3. Verify that the tasks are sorted in ascending order.
4. Click the "Sort Z-A" button.
5. Verify that the tasks are sorted in descending order.
Expected Result: Tasks should sort correctly according to the selected order.

## 7. FILTERING TASKS
**Objective**: Ensure the application can filter tasks based on their completion status.
**Steps**:
1. Add multiple tasks and mark some as complete.
2. Toggle the "Show completed tasks" checkbox.
3. Verify that only the incomplete tasks are displayed when unchecked.
4. Verify that all tasks are displayed when checked.
**Expected Result**: The application should correctly filter and display tasks based on their completion status.

## 8. LOCAL STORAGE INTEGRATION
**Objective**: Confirm that tasks are saved and loaded from local storage.
**Steps**:
1. Add a few tasks.
2. Refresh the page.
3. Verify that the tasks are still present in the list after the page reload.
**Expected Result**: Tasks should persist and be reloaded from local storage upon page refresh.

## 9.BLANK INPUT
**Objective**: Check whether the list allows blank tasks.
**Steps**:
1. Enter a blank task in the input field.
2. Check whether the list allows a blank task.
**Expected Result**: The list should not allow a blank task.

## 10.CHECK WITH LARGE AMOUNT OF INPUTS
**Objective** : Add a large amount of tasks to check the effect on performance.
**Steps**:
1. Add a large amount of tasks.
2. Check whether the application is works the same as in it did in its previous state.
**Expected Result**: The application should retain its performance irrespective of its list size.
