iReport
===
iReport application allows the end users to report the incidents that they see and then submit them to the editors. On the other side, the editors can check the submitted reports to determine which piece of news to accept or reject.

# Actors
 * Normal app user.
 * Admin app user.

## Normal app user
 * The normal app user's home screen contains three tabs: one for the "featured reports", and one for the "all reports" and the last one for submitting reports.
 * In the last tab, the user can click "Capture a photo" or "Select an existing Photo".
 * When the user clicks "Capture a photo", the camera app will launch, and the user can capture a photo using the camera, then the user can attach a title and a description to it and then submit the incident.
 * When the user clicks "Select an existing Photo", the photo gallery will be launched,  and the user can pick a photo, and then attach a title and a description to it and finally submit.
 * The first and second tabs display the featured reports and all the reports respectively.

## Admin app user (Editor)
 * The admin app user's home screen contains four tabs: the same previous three tabs + one for the pending reports.
 * The pending reports tab displays all the pending reports submitted by all the users.
 * In the pending tab, the admin user can click any of the available reports to view its details.
 * In the report details, the admin user can approve or reject.
