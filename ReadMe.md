# AWS SMS Helper

  A library to help with sending SMS, through AWS SNS.

## Notes

* Check the examples dir.

* Transactional SMS are sent almost immediately and the failure rate is rather low.

* Not all AWS Regions support sending SMS-es.

## Log

* 190423_1900	Decided to convert the package into a simple SMS helper and implement the verification part as a separate module, so that other channels too could be used to create challenges.
