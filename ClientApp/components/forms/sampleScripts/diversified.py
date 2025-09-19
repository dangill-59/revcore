# Lookup Code
logger.Info("Lookup Started")

import clr
import System
clr.AddReference("System.Data")

from System.Data import DataSet
from System.Data.OleDb import OleDbConnection, OleDbDataAdapter, OleDbCommand, OleDbSchemaGuid
from System.Data import CommandType

conn_string = r'Provider=Microsoft.Jet.OLEDB.4.0;Data Source=\\STORAGE\public\;;Extended Properties="text;HDR=No;FMT=TabDelimited"'
connection = OleDbConnection(conn_string)
connection.Open()

for doc in scriptInput:
    if doc.indexes['WORK ORDER NUMBER'] is None:
        continue
    logger.Info("Looking for Work Order " + str(doc.indexes['WORK ORDER NUMBER']) )
    try:
        command = connection.CreateCommand()
        command.CommandText = "select * from [woservice.txt] where [F3] = " + str(doc.indexes['WORK ORDER NUMBER']) 
#        command.CommandText = "select * from [woservice.txt] "

        reader = command.ExecuteReader()
        if reader.Read():
#            logger.Info( "filed 2 is " + str(reader[2]) , False)
            doc.indexes['Date'] = str(reader[3])
            doc.indexes['CUSTOMER NAME'] = str(reader[1])
            doc.indexes['CUSTOMER NUMBER'] = str(reader[0])
            doc.indexes['DESCRIPTION'] = str(reader[4])
        else:
            logger.Warn( "Work Order " + str(doc.indexes['WORK ORDER NUMBER'])  + " not  found")

    except Exception,e:
        logger.Error("Exception while Looking for Work Order " + str(doc.indexes['WORK ORDER NUMBER']) +' Error: '+str(e) )


connection.Close()

logger.Info("Lookup Complete")
