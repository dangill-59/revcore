# Lookup Code
logger.Info("Lookup Started")

import clr
import System
clr.AddReference("System.Data")

from System.Data import DataSet
from System.Data.OleDb import OleDbConnection, OleDbDataAdapter, OleDbCommand, OleDbSchemaGuid
from System.Data import CommandType

conn_string = r'Provider=Microsoft.Jet.OLEDB.4.0;Data Source=\\STORAGE\public\;Extended Properties="text;HDR=No";'
connection = OleDbConnection(conn_string)
connection.Open()

for doc in scriptInput:
    if doc.indxes['WORK ORDER NUMBER'] is None:
        continue
    logger.Info("Looking for Work Order " + str(doc.indxes['WORK ORDER NUMBER']) )
    try:
        command = connection.CreateCommand()
        command.CommandText = "select * from [wosupply.txt] where [F3] = " + str(doc.indxes['WORK ORDER NUMBER'])

        reader = command.ExecuteReader()
        if reader.Read():
            doc.indxes['CUSTOMER NAME'] = reader[1]
            doc.indxes['CUSTOMER NUMBER'] = reader[0]
        else:
            logger.Warn( "Work Order " + str(doc.indxes['WORK ORDER NUMBER'])  + " not  found", True)

    except:
        logger.Error("Exception while Looking for Work Order " + str(doc.indxes['WORK ORDER NUMBER']), True )


connection.Close()

logger.Info("Lookup Complete")